import { ButtonHTMLAttributes, InputHTMLAttributes } from 'react';
import { EditorProps } from 'react-draft-wysiwyg';
import { FieldError } from 'react-hook-form';

export interface IFieldProps {
  placeholder: string;
  error?: FieldError | undefined | any;
}

type TypeInputPropsField = InputHTMLAttributes<HTMLInputElement> & IFieldProps;

export interface IField extends TypeInputPropsField {}

export interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {}

type TypeEditorPropsField = EditorProps & IFieldProps;

export interface ITextEditor extends Omit<TypeEditorPropsField, 'editorState'> {
  onChange: (...event: any[]) => void;
  value: string;
}
