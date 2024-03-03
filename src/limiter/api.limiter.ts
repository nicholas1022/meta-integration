
class ApiLimiter {

  public fetchLimit = (fetch: Function, duration: number) => {
    setInterval(fetch, duration); // Fetch data every 2 seconds
  };

}

export default ApiLimiter;