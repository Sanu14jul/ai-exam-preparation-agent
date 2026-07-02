class MemoryStore:
    """
    Temporary in-memory storage.

    Later this will be replaced by Redis.
    """

    def __init__(self):
        self.memory = {}

    def save(self, key: str, value):
        self.memory[key] = value

    def get(self, key: str):
        return self.memory.get(key)

    def clear(self):
        self.memory.clear()


memory_store = MemoryStore()