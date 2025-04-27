class ApiResponse {
  constructor(statusCode, data, message = "Sucessfully Executed") {
    this.statusCode = statusCode;
    this.data = data;
    this.message = message;
    this.sucess = statusCode < 400;
  }
}

export { ApiResponse };
