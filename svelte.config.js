import adapter from '@sveltejs/adapter-vercel';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
      //
    }),
    prerender: {
      handleMissingId: 'warn',
      handleHttpError: 'warn'
    }
	},
};

export default config;
