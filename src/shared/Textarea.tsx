import React, { useState, forwardRef } from "react";
import styled, { css } from "styled-components";

const sharedStyles = css<{
  $hasError: boolean;
  $isFocused: boolean;
}>`
  width: 100%;
  height: 100%;
  font-size: 16px;
  padding: 12px;
  border: 2px solid
    ${({ $hasError, theme, $isFocused }) =>
      $hasError ? "#ec1e1e" : $isFocused ? theme.colorText : theme.hover};
  border-radius: 8px;
  outline: none;
  color: ${({ theme }) => theme.colorText};
  background: ${({ theme }) => theme.bgBody};
  transition: border-color 0.3s;
`;

const InputWrapper = styled.div<{ width: string }>`
  position: relative;
  width: ${({ width }) => width};
  height: 100%;
`;

const StyledTextarea = styled.textarea<{
  $hasError: boolean;
  $isFocused: boolean;
}>`
  ${sharedStyles}
  resize: vertical;
`;

const StyledLabel = styled.label<{
  $isFloating: boolean;
  $hasError: boolean;
}>`
  position: absolute;
  left: 14px;
  top: ${({ $isFloating }) => ($isFloating ? "-12px" : "18px")};
  transform: translateY(${({ $isFloating }) => ($isFloating ? "0" : "-50%")});
  font-size: 16px;
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

interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  width?: string;
  label: string;
  error?: string;
  onClearError?: () => void;
  onValidate?: () => void;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      width = "100%",
      label,
      error,
      onFocus,
      onBlur,
      onClearError,
      onValidate,
      onChange,
      value,
      defaultValue,
      ...rest
    },
    ref
  ) => {
    const [isFocused, setIsFocused] = useState(false);
    const [text, setText] = useState(
      typeof value === "string"
        ? value
        : typeof defaultValue === "string"
        ? defaultValue
        : ""
    );
    const hasError = !!error;

    const isFloating = isFocused || text.length > 0;

    const handleFocus = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(true);
      onFocus?.(e);
      onClearError?.();
    };

    const handleBlur = (e: React.FocusEvent<HTMLTextAreaElement>) => {
      setIsFocused(false);
      onBlur?.(e);
      onValidate?.();
    };

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      setText(e.target.value);
      onChange?.(e);
    };

    return (
      <InputWrapper width={width}>
        <StyledTextarea
          {...rest}
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          $isFocused={isFocused}
          $hasError={hasError}
        />
        <StyledLabel $isFloating={isFloating} $hasError={hasError}>
          {label}
        </StyledLabel>
        {hasError && <ErrorText>{error}</ErrorText>}
      </InputWrapper>
    );
  }
);

// Textarea.displayName = "Textarea";
