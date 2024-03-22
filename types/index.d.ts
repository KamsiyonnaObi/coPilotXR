// ====== USER PARAMS
declare type CreateUserParams = {
  clerkId: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  photo: string;
};

declare type UpdateUserParams = {
  firstName: string;
  lastName: string;
  username: string;
  photo: string;
};

// ====== IMAGE PARAMS
declare type AddImageParams = {
  image: {
    title: string;
    secureURL: string;
    publicId: string;
    desc: string | undefined;
  };
  userId: string;
};

// declare type TransformedImageProps = {
//   image: any;
//   type: string;
//   publicId: string;
//   title: string;
//   transformationConfig: Transformations | null;
//   isTransforming: boolean;
//   hasDownload?: boolean;
//   setIsTransforming?: React.Dispatch<React.SetStateAction<boolean>>;
// };

declare type Transformations = {
  fillBackground?: boolean;
  removeBackground?: boolean;
};
