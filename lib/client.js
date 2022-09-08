// it is the file that conned out sanity Application with Nextjs Application

import sanityClient from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "gwewnaig",
  dataset: "production",
  apiVersion: "2022-09-08",
  useCdn: true,
  token:
    "sk89QTH0sotmKU0EoXSY2Gujq69cOKkk4XyHvWWH3rdv7JB5dPOYFzDJIXgOJx0PF93r5RkZpzUdRHmlbT98hm5aKqU30v4DGeVjpNtNCuY9Pmp1xdu9xc0BcZNosESUiVIAFOetl8qwBx7IsBHM1Fp9iIWcji95gUBtOrBNjuTMgwCknr3o",
});

const builder = ImageUrlBuilder(client);

export const urlFor = (source) => builder.image(source); // taking Image from Database
