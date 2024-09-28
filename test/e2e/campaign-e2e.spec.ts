import { describe, test, expect } from '@jest/globals';
import request from 'supertest';
import { PrismaClient } from '@prisma/client';
import app from '../../src/main/config/app';
import { CAMPAIGNS_MOCK } from '../mocks/campaigns.mock';

jest.mock('@prisma/client', () => ({
  PrismaClient: jest.fn().mockImplementation(() => ({
    campaigns: {
      findMany: jest.fn().mockResolvedValue(CAMPAIGNS_MOCK),
    },
    $disconnect: jest.fn(),
  })),
}));

describe('GET api/campaign/findAll', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('Should return all campaigns', async () => {
    const result = await request(app)
      .get('/api/campaign/findAll');
    expect(result.status).toEqual(200);
    expect(result.body).toStrictEqual({
      body: CAMPAIGNS_MOCK,
    });

    const prisma = new PrismaClient();
    expect(prisma.campaigns.findMany).not.toHaveBeenCalled();
  });
});
