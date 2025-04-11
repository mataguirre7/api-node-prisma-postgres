import PrismaClient from "@prisma/client";

const prisma = new PrismaClient();

const courses = prisma.Course;

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
};
