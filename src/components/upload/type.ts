import { ReactNode } from 'react';
import { DropzoneOptions } from 'react-dropzone';
// @mui
import { SxProps } from '@mui/material';
import { Theme } from '@mui/material/styles';
import { ImageType } from 'src/utils/TS/interface';

// ----------------------------------------------------------------------

export interface CustomFile extends File {
  path?: string;
  preview?: string;
  url?: string;
  alt?:string;
  lastModifiedDate?: Date;
}

export interface UploadProps extends DropzoneOptions {
  error?: boolean;
  file: CustomFile | string | null;
  helperText?: ReactNode;
  sx?: SxProps<Theme>;
}

export interface UploadMultiFileProps extends DropzoneOptions {
  //files: (File | string)[];
  files: (ImageType )[];
  error?: boolean;
  showPreview?: boolean;
  sx?: SxProps<Theme>;
  helperText?: ReactNode;
  onUpload?: VoidFunction;
  //onRemove?: (file: File | string) => void;
  onRemove?: (file: ImageType ) => void;
  onRemoveAll?: VoidFunction;
}
