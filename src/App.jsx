import { useState } from "react";
import GuestList from "guestlist";
import GuestDetails from "guestdetails";

const PLACEHOLDER_GUESTS = [
  {
    id: 1,
    name: "Idell Mayert",
    email: "Idell_Mayert@example.org",
    phone: "583-250-0421",
    bio: "Loves conventions and meeting new people.",
    job: "Event Coordinator",
  },
  {
    id: 2,
    name: "Elyse Rath",
    email: "Elyse_Rath@example.net",
    phone: "(805) 768-9474",
    bio: "Always arrives early and helps organize events.",
    job: "Product Manager",
  },
];

export default function App() {
  const [selectedGuestId, setSelectedGuestId] = useState(null);

  const selectedGuest =
    PLACEHOLDER_GUESTS.find((g) => g.id === selectedGuestId) ?? null;

  return (
    <div>
      <h1>Guest List</h1>

      {!selectedGuest ? (
        <GuestList guests={PLACEHOLDER_GUESTS} onSelect={setSelectedGuestId} />
      ) : (
        <>
          <GuestDetails guest={selectedGuest} />
          <button onClick={() => setSelectedGuestId(null)}>Back</button>
        </>
      )}
    </div>
  );
}
