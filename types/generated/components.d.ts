import type { Schema, Attribute } from '@strapi/strapi';

export interface NewsDynamicZonesImage extends Schema.Component {
  collectionName: 'components_news_dynamic_zones_images';
  info: {
    displayName: 'image';
    icon: 'attachment';
    description: '';
  };
  attributes: {
    img: Attribute.Media;
  };
}

export interface NewsDynamicZonesName extends Schema.Component {
  collectionName: 'components_news_dynamic_zones_names';
  info: {
    displayName: 'content';
    description: '';
    icon: 'filter';
  };
  attributes: {
    name: Attribute.String;
    description: Attribute.Text;
    date: Attribute.Date;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'news-dynamic-zones.image': NewsDynamicZonesImage;
      'news-dynamic-zones.name': NewsDynamicZonesName;
    }
  }
}
