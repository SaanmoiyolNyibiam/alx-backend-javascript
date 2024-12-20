// this is a module that defines a loadBalancer function

export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]).then((result) => result);
}
