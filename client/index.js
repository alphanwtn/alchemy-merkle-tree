const axios = require("axios");
const niceList = require("../utils/niceList.json");
const MerkleTree = require("../utils/MerkleTree");

const serverUrl = "http://localhost:1225";

async function main() {
  // TODO: how do we prove to the server we're on the nice list?

  const name = "Jeremy Hansen III";

  const proof = [
    {
      data: 'ab133e6ab5d0d36471787c3caebe1ae8b4678e5656a4f29030b4e896c04408c6',
      left: false
    },
    {
      data: 'd0a03aef51206521ec678ad0be4f21c32427750cbe2452c20c429583a87e880d',
      left: false
    },
    {
      data: 'bfefd1ddb5cc96322700ae251fae1d80ffe5a94b12287863eaa88ac4c32f0d06',
      left: true
    },
    {
      data: '93f4ea38f0eccc570663f7ef61bc0a8912f318a6f5db8d2e0021925ddb12e3bf',
      left: false
    },
    {
      data: 'c3662b0259de7f1eaecd476d18c22bcd833f6cf743f7bc9ca6de640fb836c4ba',
      left: true
    },
    {
      data: 'ce2df6e0530d3f6f4cfa554d8091078a244cae644c2375776053c8e37eefb4a1',
      left: false
    },
    {
      data: 'cc30d78afa76ed2936a9fa7b96d81df59a0e8e1a73b175ab844e454be515637c',
      left: false
    },
    {
      data: '16070a51b8a9700b1a9dfd2ada671c7fea6ee9d3c56d02e494d334520c953deb',
      left: false
    },
    {
      data: '44a11637716a257506d13337979aabaf58fd2ac6cb36253905571b519d2bfb22',
      left: false
    },
    {
      data: 'cf209348f7b2723e7f5937ccaef23f006515ba0a765ca96057cc689c11a8dc5c',
      left: false
    }
  ]

  const { data: gift } = await axios.post(`${serverUrl}/gift`, {
    name,
    proof,
  });

  console.log({ gift });
}

main();
