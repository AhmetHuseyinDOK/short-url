const client = require("../prisma");
const short = require("short-uuid");

/**
 *
 * @param {String} url
 */
async function shorten(url) {
  const record = await client.link.create({
    data: {
      url: url,
      shortened: short.generate(),
      lastUsed: new Date(),
    },
  });
  return `${process.env.BASE_URL}${record.shortened}`;
}

async function resolve(shortenedURL) {
  let record = await client.link.findUnique({
    where: {
      shortened: shortenedURL,
    },
  });

  await client.link.update({
    where: {
      shortened: shortenedURL,
    },
    data: {
      lastUsed: new Date(),
    },
  });

  return record.url;
}

module.exports = {
  shorten,
  resolve,
};
