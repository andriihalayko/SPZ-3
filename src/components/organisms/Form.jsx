import Button from "../atoms/Button";
import Block from "../atoms/Block";
import Input from "../atoms/Input";
import { Text } from "../atoms/typography";

const Form = () => {
  return (
    <Block
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Block
        as="form"
        backgroundColor="#fff"
        padding="10px"
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="300px"
        borderRadius="12px"
        boxShadow="0px 0px 3px 1px #000"
      >
        <Text color="#3dbb52" fontSize="30px">
          Зареєструватись
        </Text>
        <Input placeholder="Введіть ім'я" />
        <Input placeholder="Введіть пароль" type="password" />
        <Button backgroundColor="#3dbb52" margin="5px" width="200px">
          Відправити
        </Button>
      </Block>
    </Block>
  );
};

export default Form;
