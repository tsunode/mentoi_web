import { useEffect, useRef, useState, Children } from 'react';
import { IoIosArrowDropright, IoIosArrowDropleft } from 'react-icons/io';
import ButtonIcon from '../ButtonIcon';
import { Container, ButtonOption } from './styles';

interface CarouselProps {
  data?: {
    name: string;
    color: string;
  }[];
  arrowVisible?: boolean;
}

const Carousel: React.FC<CarouselProps> = ({
  data,
  arrowVisible = true,
  children,
}) => {
  const ChildrenCount = Children.count(children);

  const wrapRef = useRef<HTMLDivElement>();
  const [selectedOption, setSelectedOption] = useState<boolean[]>([]);
  const [itemsLength, setItemsLength] = useState(ChildrenCount);
  const [arrowVisibility, setArrowVisibility] = useState(false);

  useEffect(() => {
    if (data) {
      const itemsOptions = data.map(() => false);

      setSelectedOption([...itemsOptions, true]);
      setItemsLength(data.length);
    }
  }, [data]);

  useEffect(() => {
    const { scrollWidth, offsetWidth } = wrapRef.current;

    if (scrollWidth > offsetWidth) setArrowVisibility(true);
  }, []);

  function handleSlider(type: string): void {
    const { scrollWidth, childNodes } = wrapRef.current;

    const pass = scrollWidth / childNodes.length;

    const value = type === 'previous' ? -pass : pass;

    wrapRef.current.scrollBy(value, 0);
  }

  function handleOption(position: number): void {
    const itemsOptios = selectedOption.map((_, index) => index === position);

    setSelectedOption(itemsOptios);
  }

  return (
    <Container>
      {arrowVisible && (
        <ButtonIcon
          type="button"
          onClick={() => handleSlider('previous')}
          icon={IoIosArrowDropleft}
          visible={arrowVisibility}
        />
      )}

      <div ref={wrapRef}>
        {data && (
          <ButtonOption
            selected={selectedOption[itemsLength]}
            onClick={() => handleOption(itemsLength)}
          >
            AREA INTERESSE
          </ButtonOption>
        )}
        {data?.map((item, index) => (
          <ButtonOption
            key={item.name}
            color={item.color}
            selected={selectedOption[index]}
            onClick={() => handleOption(index)}
          >
            {item.name}
          </ButtonOption>
        ))}
        {!data && children}
      </div>

      {arrowVisible && (
        <ButtonIcon
          type="button"
          onClick={() => handleSlider('next')}
          icon={IoIosArrowDropright}
          visible={arrowVisibility}
        />
      )}
    </Container>
  );
};

export default Carousel;