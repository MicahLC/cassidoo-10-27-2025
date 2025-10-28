import placeScarecrows from "./index.ts";
import test from 'node:test';
import assert from 'node:assert';

test('placeScarecrows', async (t) => {
    await t.test('first email example', (t) => {
        assert.deepEqual(placeScarecrows([1, 1, 0, 1, 1, 0, 1], 3), [1, 4, 6]);
    });

    await t.test('second email example', (t) => {
        assert.deepEqual(placeScarecrows([1, 0, 1, 1, 0, 1], 3), [1, 4]);
    });

    await t.test('third email example', (t) => {
        assert.deepEqual(placeScarecrows([1, 1, 1, 1, 1], 1), [0, 1, 2, 3, 4]);
    });

    await t.test('tricky example', (t) => {
        assert.deepEqual(placeScarecrows([1, 0, 1], 3), [1]);
    });

    await t.test('simple', (t) => {
        assert.deepEqual(placeScarecrows([0, 0, 1], 1), [2]);
    });
});
