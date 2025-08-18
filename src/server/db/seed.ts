import { auth } from "../auth";

async function seedTestUser() {
  await auth.api.signUpEmail({
    body: {
      name: "John Doe",
      email: "john.doe@example.com",
      password: "password1234",
    },
  });

  console.log("Seeding complete");
}

seedTestUser().catch(console.error);
