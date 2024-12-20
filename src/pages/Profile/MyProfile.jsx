import React, { useState } from "react";
import { Button, Form, Input } from "antd";
import dashProfile from "../../assets/images/dashboard-profile.png";
import { FiEdit } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import PhoneCountryInput from "../../Components/PhoneCountryInput";
import PageHeading from "../../Components/PageHeading";
import PasswordChangeModalForm from "../../Components/User/PasswordChangeModalForm";

const MyProfile = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const profileData = {
    name: "Enrique",
    email: "enrique@gmail.com",
    phone: "+880 1550597212",
    profile: dashProfile,
  };
  // console.log(code);
  return (
    <div className="space-y-[24px] min-h-[83vh] bg-light-gray rounded-2xl">
      <PageHeading
        title={"Personal information"}
        backPath={-1}
        disbaledBackBtn={true}
        className={"px-10 border-b border-[#CEF0FF] py-6"}
      />
      <div className="w-full">
        <div className="py-4 px-8 flex justify-end items-center">
          {/* <h6 className="text-2xl text-white">Personal Information</h6> */}
          <Button
            onClick={() => setIsModalOpen(true)}
            size="large"
            type="default"
            className="px-8"
          >
            Change Password
          </Button>
        </div>
        <Form
          name="basic"
          layout="vertical"
          className="w-full grid grid-cols-12 gap-x-10 px-14 py-8"
          autoComplete="off"
          initialValues={{
            name: profileData.name,
            email: profileData.email,
          }}
        >
          <div className="col-span-3 space-y-6 ">
            <div className="min-h-[365px] flex flex-col items-center justify-center p-8 gap-8">
              <div className="my-3 ">
                <img
                  src={dashProfile}
                  alt=""
                  className="h-[200px] w-[200px] rounded-full border-4 border-indigo-400"
                />
              </div>
              {/* <h5 className="text-lg text-[#222222]">{"Chelfor"}</h5>
              <h4 className="text-2xl text-[#222222]">{"Admin"}</h4> */}
            </div>

          </div>
          <div className="col-span-9 space-y-[24px] w-1/2">
            <Form.Item
              className="text-lg text-[#1F8D84] font-medium"
              label="Name"
              name="name"
            >
              <Input
                readOnly
                size="large"
                className="h-[56px] rounded-lg bg-[#EFFAFF] mt-3"
              />
            </Form.Item>
            <Form.Item
              className="text-lg text-[#1F8D84] font-medium"
              label="Email"
              name="email"
            >
              <Input
                readOnly
                size="large"
                className="h-[56px] rounded-lg bg-[#EFFAFF] mt-3"
              />
            </Form.Item>
            <Button
              onClick={(e) => navigate(`edit`)}
              size="large"
              type="primary"
              className="px-8 w-1/2 mx-auto rounded-full font-semibold bg-playground"
            >
              <FiEdit /> Edit Profile
            </Button>
            {/* <Form.Item
              className="text-lg text-[#222222] font-medium"
              label="Phone Number"
              name="phone"
            >
              <PhoneCountryInput disabled={true} />
            </Form.Item> */}
          </div>
        </Form>
      </div>
      <PasswordChangeModalForm
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}

      />
    </div>
  );
};

export default MyProfile;
