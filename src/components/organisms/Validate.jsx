import Block from "../atoms/Block";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const Validate = () => {
  return (
    <Block
      backgroundColor="#d6d6d6"
      padding="10px"
      display="flex"
      flexDirection="column"
      alignItems="center"
      width="300px"
      borderRadius="12px"
      boxShadow="0px 0px 3px 1px #000"
    >
      <Input placeholder="Введіть код валідації"/>
      <Button backgroundColor="#b068da" margin="15px" width="200px">
        Валідувати
      </Button>
    </Block>
  );
};

export default Validate;
