import {classNames} from 'shared/lib/classNames/classNames';

describe('classNames', () => {
    test('with only one main argument', () => {
        expect(classNames('mainClassName', {}))
            .toBe('mainClassName');
    })

    test('with an additional argument', () => {
        expect(classNames('mainClassName', {}, ['additional1', 'additional2', undefined]))
            .toBe('mainClassName additional1 additional2');
    })

    test('with all fields', () => {
        expect(classNames('mainClassName', {hovered: true, scrollable: false, hidden: undefined}, ['additional1', 'additional2', undefined]))
            .toBe('mainClassName hovered additional1 additional2');
    })
})