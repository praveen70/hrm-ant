import React from 'react';
import { Alert } from 'antd';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledAlert = styled(Alert)`
	color: black;
	font-weight: solid;
`;

// const Errors = ({ error }) => <StyledAlert message="Error" description={error.message} type="error" showIcon />;

// export default Errors;





const ErrorStyles = styled.div`
  padding: 2rem;
  background: white;
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid red;
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

const Errors = ({ error }) => {
  if (!error || !error.message) return null;
  if (error.networkError && error.networkError.result && error.networkError.result.errors.length) {
    return error.networkError.result.errors.map((error, i) => (
      <ErrorStyles key={i}>
        <p data-test="graphql-error">
          <strong>Error!</strong>
          {error.message.replace('GraphQL error: ', '')}
        </p>
      </ErrorStyles>
    ));
  }
  return (
    <ErrorStyles>
      <p data-test="graphql-error">
        <strong>Error!</strong>
        {error.message.replace('GraphQL error: ', '')}
      </p>
    </ErrorStyles>
  );
};

Errors.defaultProps = {
  error: {},
};

Errors.propTypes = {
  error: PropTypes.object,
};

export default Errors;
