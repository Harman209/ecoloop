export type ProductCategory =
  | 'Recycled Plastics'
  | 'Upcycled Containers'
  | 'Upcycled Textiles'
  | 'Paper & Plantable Products'
  | 'Organic Resource Recovery';

export interface Product {
  slug: string;
  name: string;
  category: ProductCategory;
  description: string;
  madeFrom: string;
  applications: string[];
  howItCreatesValue: string;
  circularImpact: string;
  image: string;
  fallbackImage: string;
  indicativePrice: string;
  featured?: boolean;
  cautionNotice?: string;
  tagline?: string;
}

export type CustomerType =
  | 'Student'
  | 'Parent'
  | 'School'
  | 'Organisation'
  | 'Individual'
  | 'Other';

export interface EnquiryFormData {
  fullName: string;
  email: string;
  phoneNumber: string;
  productSlug: string;
  quantity: string;
  customerType: CustomerType;
  address: string;
  city: string;
  pinCode: string;
  message: string;
}
