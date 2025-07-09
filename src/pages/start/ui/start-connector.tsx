import { Start } from './start';

interface IStartConnectorProps {
  onPress: () => void;
}

export const StartConnector = ({ onPress }: IStartConnectorProps) => {
  return <Start onPress={onPress} />;
};
