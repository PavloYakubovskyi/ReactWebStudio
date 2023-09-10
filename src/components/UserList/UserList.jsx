import { PiUserSquareFill } from "react-icons/pi";
import PropTypes from "prop-types";

const UserList = ({ users }) => {
  return (
    <>
      {users.length ? (
        <ul>
          {users.map((item) => (
            <li key={item.id}>
              <div>
                <PiUserSquareFill />
                {item.name}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <>Users not found</>
      )}
    </>
  );
};

export default UserList;

UserList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      password: PropTypes.string.isRequired,
    })
  ),
};
