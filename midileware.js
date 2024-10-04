import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/events(.*)",
  "/meetings(.*)",
  "/availability(.*)" // Fixed typo: "availbility" to "availability"
]);

export default clerkMiddleware((auth, req) => {
  console.log("req  :",req)
  if (!auth.userId && isProtectedRoute(req)) {
    return auth.redirectToSignIn();
  }
});

export const config = {
  matcher: [
    // Protect all routes that should be guarded by Clerk (including API routes)
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
