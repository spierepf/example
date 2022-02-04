import Example from '../src/example'

test('It is not easy being green', () => {
    expect(new Example().its_not_easy_being_green()).toBeDefined();
})
