export function formatDate(timestamp) {
    const date = new Date(timestamp);
    const time = date.toLocaleTimeString("en-us");
    return date.toLocaleDateString() + " | " + time.substr(0, 5) + time.slice(-2);
  }