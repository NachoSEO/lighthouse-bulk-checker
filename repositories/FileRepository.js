class FileRepository {
  constructor(fs) {
    this.fs = fs;
  }

  createFile(data, path) {
    try {
      this.fs.appendFileSync(this._createReportName(path), data, 'utf8');
    } catch (error) {
      console.error(error.stack);
    }
  }

  _createReportName(path) {
    const date = this._getCurrentDate();
    const pathArr = path.split('/');
    const pathRest = pathArr.slice(0,2).join('/');
    const fileName = pathArr[pathArr.length - 1];
    return `${pathRest}/${date}-${fileName}`;
  }

  _getCurrentDate() {
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0');
    const yyyy = today.getFullYear();
  
    return `${dd}-${mm}-${yyyy}`;
  }
}

module.exports = {
  FileRepository
}