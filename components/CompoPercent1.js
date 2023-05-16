import React from 'react'
import {
  Button,
  GridItem,
} from "@chakra-ui/react";
import PercentArea from './PercentArea';



function CompoPercent1(props) {

  const handleClick = (index, val, active) => {

    const updatedArr = props.percentArr.map(item => {

      if (item.id === index) {
        if (active) {
          props.setEnableNext(true);
          return { ...item, active: false};
        }
        else {
          props.setEnableNext(false);
          return { ...item, active: true};
      }
     } else {
        return { ...item, active: false };
      }
    });
    props.setPercentArr(updatedArr);
    props.setPerVal(val);
  };


  return (
    <>
      { props.percentArr.map((item, i) => (
        <GridItem rowSpan={2} colSpan={1} key={i}>
          <Button
            _hover={{
              color: 'white'
            }}
            _active={{
              border: '2px solid #75613b',
              color: 'white'
            }}
            onClick={() => handleClick(item.id, item.val, item.active)}
            variant="solid"
            bg="#242323"
            color="#a8a5a5"
            border={(item.active) ? '2px solid rgb(117, 97, 59)' : '2px solid transparent'}
            p={{base: 4, sm: 5, md: 6}}
          >
            {item.val}
          </Button>
        </GridItem>
      ))}
      <PercentArea perVal={props.perVal} />
    </>
  );
}


export default CompoPercent1;
