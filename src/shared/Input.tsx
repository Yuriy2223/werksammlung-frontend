import React, { useState, forwardRef } from "react";
import styled, { css } from "styled-components";

const sharedStyles = css<{
  height?: string;
  $hasError: boolean;
  $isFocused: boolean;
}>`
  width: 100%;
  font-size: 16px;
  padding: 12px;
  border: 2px solid
    ${({ $hasError, theme, $isFocused }) =>
      $hasError ? "#ec1e1e" : $isFocused ? theme.colorText : theme.hover};
  border-radius: 8px;
  outline: none;
  color: ${({ theme }) => theme.colorText};
  transition: border-color 0.3s;

  ${({ height }) =>
    height &&
    css`
      height: ${height};
    `}

  &:hover {
    border-color: ${({ $hasError, theme }) =>
      $hasError ? "#ec1e1e" : theme.colorText};
  }
`;
const InputWrapper = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width};
  margin-bottom: 36px;
`;
const StyledInput = styled.input<{
  height?: string;
  $hasError: boolean;
  $isFocused: boolean;
}>`
  ${sharedStyles}
  background: ${({ theme }) => theme.bgBody};

  &:-webkit-autofill {
    background-color: ${({ theme }) => theme.bgBody} !important;
    box-shadow: 0 0 0 1000px ${({ theme }) => theme.bgBody} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colorText} !important;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
const StyledLabel = styled.label<{
  $isFloating: boolean;
  $hasError: boolean;
}>`
  position: absolute;
  left: 14px;
  top: ${({ $isFloating }) => ($isFloating ? "-10px" : "50%")};
  transform: translateY(${({ $isFloating }) => ($isFloating ? "0" : "-50%")});
  font-size: ${({ $isFloating }) => ($isFloating ? "14px" : "16px")};
  color: ${({ $hasError, theme }) => ($hasError ? "#ec1e1e" : theme.colorText)};
  background: ${({ theme }) => theme.bgBody};
  padding: 0 6px;
  transition: all 0.2s ease;
  pointer-events: none;
`;
const ErrorText = styled.div`
  position: absolute;
  bottom: -22px;
  left: 4px;
  color: #ec1e1e;
  font-size: 12px;
`;

interface TextInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  width?: string;
  height?: string;
  label: string;
  error?: string;
  onClearError?: () => void;
  onValidate?: () => void;
  button?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      name,
      width = "100%",
      height = "48px",
      label,
      error,
      button,
      onChange,
      onFocus,
      onBlur,
      onClearError,
      onValidate,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const inputRef = React.useRef<HTMLInputElement>(null);
    const hasError = !!error;
    const isFloating: boolean = isFocused || !!inputRef.current?.value.trim();

    const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
      onClearError?.();
    };

    const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      onBlur?.(e);
      onValidate?.();
    };

    // const setRef = (node) => {
    //   if (typeof ref === "function") ref(node);
    //   else if (ref) ref.current = node;
    //   inputRef.current = node;
    // };
    const setRef = (node: HTMLInputElement | null) => {
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
      inputRef.current = node;
    };

    return (
      <InputWrapper width={width}>
        <StyledInput
          {...rest}
          // ref={(node) => {
          //   if (typeof ref === "function") ref(node);
          //   else if (ref) ref.current = node;
          //   inputRef.current = node;
          // }}
          ref={setRef}
          name={name}
          onChange={onChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          $isFocused={isFocused}
          $hasError={hasError}
          height={height}
        />
        <StyledLabel $isFloating={isFloating} $hasError={hasError}>
          {label}
        </StyledLabel>
        {button}
        {hasError && <ErrorText>{error}</ErrorText>}
      </InputWrapper>
    );
  }
);
/*************************************************************************** */
/* ${autofillFix}; */
/* &:-webkit-autofill {
    background-color: ${({ theme }) => theme.bgBody} !important;
    box-shadow: 0 0 0 1000px ${({ theme }) => theme.bgBody} inset !important;
    -webkit-text-fill-color: ${({ theme }) => theme.colorText} !important;
    transition: background-color 5000s ease-in-out 0s;
  } */

// const autofillFix = css`
//   &:-webkit-autofill {
//     box-shadow: 0 0 0 1000px ${({ theme }) => theme.bgBody} inset !important;
//     -webkit-text-fill-color: ${({ theme }) => theme.colorText} !important;
//     transition: background-color 5000s ease-in-out 0s;
//   }

//   &:-webkit-autofill:focus {
//     box-shadow: 0 0 0 1000px ${({ theme }) => theme.bgBody} inset !important;
//   }

//   &:-internal-autofill-selected {
//     /* для Safari */
//     appearance: none !important;
//     background-color: ${({ theme }) => theme.bgBody} !important;
//   }
// `;
