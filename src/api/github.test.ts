import axios from 'axios';
import gitApi from './github';

jest.mock('axios');
const axiosMock = axios as  jest.Mocked<typeof axios>

describe('Github', () => {
    it('It must return user\'s login and id', async () => {
        axiosMock.get = jest.fn().mockResolvedValue({ data: {
            login: 'mccartney0',
            id: '123456',
        }})
    })
});