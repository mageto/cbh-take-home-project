const crypto = require("crypto");

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;

  if (event) {
    const data = JSON.stringify(event);
    return (event.partitionKey) ? (event.partitionKey) : crypto.createHash("sha3-512").update(data).digest("hex");
  }

  if (candidate) {
    if (typeof candidate !== "string") {
      return JSON.stringify(candidate);
    }
  } else {
    return TRIVIAL_PARTITION_KEY;
  }

  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    return crypto.createHash("sha3-512").update(candidate).digest("hex");
  }

};