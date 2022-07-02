import styled from "styled-components";
import "./venusPage.css";
import Venus from "../../planet/venus"
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { OrbitControls,Stars  } from "@react-three/drei";
import * as THREE from "three";
import React, { Suspense , Component} from "react";
import { Sun } from "../sun";


export  function Venuspage() {
  return (
    
    <div className="container_venus">
      <div className="text_venus">
      <div className="title_venus">Ngành Kỹ Thuật phần mềm</div>
      <div className="content_venus">
        <div className="title_content_venus">Giới thiệu</div>
        <div className="text_content_venus">
          <p>Ngành kỹ thuật phần mềm khi học sẽ bao trùm kiến thức, các công cụ, các phương pháp cho việc định nghĩa những yêu cầu phần mềm và thực hiện các tác vụ về thiết kế, xây dựng, thử nghiệm, bảo trì phần mềm. Kỹ sư phần mềm còn phải sử dụng các kiến thức của các lĩnh vực như kỹ thuật máy tính, khoa học máy tính, quản lý, toán học, quản lý dự án, quản lý chất lượng và kỹ sư hệ thống.</p>
          
       </div>
       <div className="title_content_venus">Chương trình đào tạo</div>
        <div className="text_content_venus">
          <p>Ngành kỹ thuật phần mềm đào tạo những kiến thức liên quan đến quy trình phát triển phần mềm một cách chuyên nghiệp để tạo ra những sản phẩm phần mềm đạt chất lượng cao, đáp ứng mọi nhu cầu nghiệp vụ cụ thể trong nền sản xuất của xã hội.</p>
          <p>Sinh viên học ngành kỹ thuật phần mềm sẽ được trang bị các kiến thức chuyên sâu về công nghiệp phần mềm như: quy trình phát triển phần mềm, kỹ năng vận dụng các công cụ phần mềm vào việc hỗ trợ phát triển phần mềm khác. Ngoài ra, sinh viên cũng được trang bị những kiến thức cần thiết liên quan đến các bước liên quan trong dự án về phần mềm như: thu thập yêu cầu, phân tích, thiết kế, lập trình, kiểm thử, vận hành và bảo trì phần mềm</p>
         
          
       </div>
       <div className="title_content_venus">Định hướng nghề nghiệp</div>
       <div className="text_content_venus">
       <ul className="text_content_venus_list">
            <li> Quản lý dự án (PM)</li>
            <li>Lập trình viên (Coder)</li>
            <li>Kiểm thử phần mềm (Tester)</li>
            <li>Quản lý dự án Công nghệ Thông tin</li>
            <li>Kỹ sư đảm bảo chất lượng phần mềm</li>
            <li>Quản trị viên dự án phần mềm và CNTT</li>
          </ul>
       </div>
      </div>

      </div>
      <div id="venus">
      <Canvas camera={{ position: [0, 20, 25], fov: 45 }}  >
        <Suspense fallback={null}>
          
          {/* < Sun/> */}
          <Lights/>
          
            <Venus/>     

        </Suspense>
      </Canvas>
      </div>
      
    </div>

  );

  function Lights() {
    return (
      <>
        <ambientLight />
        <pointLight position={[0, 0, 3]} />
      </>
    );
  }
}
