import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import MegaMenu from './globals/MegaMenu';
import SocialMedia from './globals/SocialMedia';
import Footer from './globals/Footer';

dotenv.config();

module.exports = {
  // other Payload config options...
  csrf: [
    'http://localhost:3000', // add your domain here
    'https://yourdomain.com' // you can add multiple domains
  ]
}

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    Media,
  ],
  globals: [
    MegaMenu,
    SocialMedia,
    Footer,
  ],
});
