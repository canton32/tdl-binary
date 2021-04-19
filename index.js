const fs = require('fs')
const path = require('path')
const os = require('os')

module.exports = () => {
  const cwd = path.resolve(__dirname)

  let lib_path;
  const platform = os.platform();

  if (platform == "darwin")
    lib_path = `${cwd}/bin/mac/libtdjson.1.7.3.dylib`;
  else if (platform == "linux")
    lib_path = `${cwd}/bin/linux/libtdjson.so.1.7.3"`;

  if (fs.existsSync(lib_path)) {
    return lib_path
  }

  return null
}