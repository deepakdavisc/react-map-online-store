export const InfoWindowContent = ({ partner, address, email, phone, logo }) => {
  return (
    <>
      <p>{address}</p>
      <p>Phone: {phone}</p>
      <p>Email: {email}</p>
    </>
  );
};
