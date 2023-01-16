import { Alert } from "react-bootstrap";
/**
 * Defines the alert message to render if the specified error is truthy.
 * @param error
 *  an instance of an object with `.message` property as a string, typically an Error instance.
 * @returns {JSX.Element}
 *  a bootstrap danger alert that contains the message string.
 */

export const ErrorAlert: React.FC<any> = ({ error }) => {
  return error && <Alert variant="danger">Error: {error.message}</Alert>;
};
