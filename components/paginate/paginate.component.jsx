import {
  Container,
  NextButton,
  PrevButton,
  NumberContainer,
} from "./paginate.styles";

const Paginate = ({ maxPage, selectedPage, onChange }) => {
  let finalArray;
  if (maxPage <= 7) {
    finalArray = Array.from(Array(maxPage), (el, index) => index + 1);
  } else {
    if (selectedPage <= 4) {
      finalArray = Array.from(Array(5), (el, index) => index + 1).concat([
        "...",
        maxPage,
      ]);
    } else if (selectedPage >= maxPage - 2) {
      finalArray = [
        1,
        2,
        "...",
        maxPage - 3,
        maxPage - 2,
        maxPage - 1,
        maxPage,
      ];
    } else {
      finalArray = [
        1,
        "...",
        selectedPage - 1,
        selectedPage,
        selectedPage + 1,
        "...",
        maxPage,
      ];
    }
  }
  return (
    <Container
      maxPage={maxPage}
      onClick={(event) => {
        const targetEl = event.target.innerText * 1;
        if (targetEl === targetEl && targetEl !== selectedPage) {
          onChange(targetEl);
        }
      }}
    >
      <PrevButton
        onClick={(event) => {
          event.stopPropagation();
          if (selectedPage !== 1) onChange(selectedPage - 1);
        }}
      />
      {finalArray.map((el, index) => (
        <NumberContainer key={index} selectedPage={selectedPage === el}>
          {el}
        </NumberContainer>
      ))}
      <NextButton
        onClick={(event) => {
          event.stopPropagation();
          if (selectedPage !== maxPage) onChange(selectedPage + 1);
        }}
      />
    </Container>
  );
};

export default Paginate;
