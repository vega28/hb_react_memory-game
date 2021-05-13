from faker import Faker

fake = Faker()

def create_cards(num_cards):
    """ Generate fake word + color combo cards. """

    cards = []
    for i in range(num_cards):
        word = fake.unique.word()
        color = fake.safe_color_name()
        while color == 'white' or color == 'yellow':
            color = fake.safe_color_name()
        cards.extend([{'id': str(i) + 'a',
                    'word': word,
                    'color': color},
                    {'id': str(i) + 'b',
                    'word': word,
                    'color': color}])
    return cards