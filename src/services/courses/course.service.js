import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const courses = prisma.course;

export default {
  getList: async () => {
    return courses.findMany();
  },
  getOne: async (id) => {
    return courses.findOne({
      where: {
        id,
      },
    });
  },
  delete: async (id) => {
    return courses.delete({
      where: {
        id,
      },
    });
  },
  update: async (id, data) => {
    return courses.update({
      where: {
        id,
      },
      data,
    });
  },
  create: async (data) => {
    return courses.create({
      data
    });
  },
  createMany: async (data) => {
    return courses.createMany({
      data
    });
  },
};
