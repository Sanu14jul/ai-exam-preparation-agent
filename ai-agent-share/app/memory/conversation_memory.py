class ConversationMemory:

    def __init__(self):

        self.memory = {}

    def load(
        self,
        user_id,
    ):

        return self.memory.get(
            user_id,
            {},
        )

    def save(
        self,
        user_id,
        state,
    ):

        self.memory[user_id] = state

    def merge(
        self,
        old,
        new,
    ):

        merged = old.copy()

        for key, value in new.items():

            if value is not None:

                merged[key] = value

        return merged