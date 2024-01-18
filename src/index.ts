export interface Env {
  REDIRECT_STATUS_CODE: number;
  TARGET_DOMAIN: string;
}

export default {
	async fetch(
		request: Request,
		env: Env,
		ctx: ExecutionContext
	): Promise<Response> {
    const url = new URL(request.url)

    // Assemble the redirect URL, preserving the protocol, path, and query string
    const redirectUrl = `${url.protocol}//${env.TARGET_DOMAIN}${url.pathname}${url.search}`

    return Response.redirect(redirectUrl, env.REDIRECT_STATUS_CODE)
	},
};
