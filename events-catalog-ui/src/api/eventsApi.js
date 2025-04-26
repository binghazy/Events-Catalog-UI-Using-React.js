export const fetchEvents = async () => {
  try {
    const response = await fetch('https://your-dotnet-api-endpoint/events');
    if (!response.ok) throw new Error('Network error');
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    const mockData = await import('../data/mockEvents.json');
    return mockData.default;
  }
};