export namespace SocialMediaList {
  export enum EKind {
    TWITTER = 'twitter',
    FACEBOOK = 'facebook',
    YOUTUBE = 'youtube',
    INSTAGRAM = 'instagram',
    LINKED_IN = 'linkedin',
    PINTEREST = 'pinterest'
  };

  export enum EItemStyle {
    FILLED = 'filled',
    INVERTED = 'inverted',
    OUTLINED = 'outlined'
  };

  export type Item = {
    kind: EKind;
    url: string;
    title?: string;
  };

  export type Items = Item[];
};