const mockDatabase = {
    events: [{ id: '1', name: 'Sample Event', date: '2024-01-01' }],
};

// Mimic fetching an event
const fetchEvent = async (eventId) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    const event = mockDatabase.events.find((event) => event.id === eventId);
    if (!event) {
        throw new Error('Event not found');
    }
    return event;
};

// Mimic creating an event
const createEvent = async (newEvent) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    const event = { id: Date.now().toString(), ...newEvent };
    mockDatabase.events.push(event);
    return event;
};

// Mimic updating an event
const updateEvent = async (updatedEvent) => {
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate network delay
    const index = mockDatabase.events.findIndex((event) => event.id === updatedEvent.id);
    if (index !== -1) {
        mockDatabase.events[index] = updatedEvent;
        return updatedEvent;
    }
    throw new Error('Event not found');
};

export { fetchEvent, createEvent, updateEvent };
