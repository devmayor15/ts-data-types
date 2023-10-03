interface User {
  readonly dbId: number;
  email: string;
  userId: number;
  googleId?: string;
  //   startTrial: () => string
  startTrial(): string,
  getCoupon(couponName: string, value: number): number
}

interface User {
    githubToken: string
}

interface Admin extends User {
    role: 'admin' | 'ta' | 'learner'
}

const martins: Admin = {
  dbId: 22,
  email: "lol@gmail.com",
  userId: 2211,
  role: 'admin',
  startTrial: () => {
    return "trail started";
  },
  githubToken: 'github',
  getCoupon: (name: 'martins', off: 10) => {
    return 10
  }
};
