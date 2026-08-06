import nextConfig from "eslint-config-next/core-web-vitals";

const eslintConfig = [
  ...nextConfig,
  {
    ignores: ["node_modules/**", ".next/**", "out/**", "public/assets/**", "next-env.d.ts"],
  },
];

export default eslintConfig;
