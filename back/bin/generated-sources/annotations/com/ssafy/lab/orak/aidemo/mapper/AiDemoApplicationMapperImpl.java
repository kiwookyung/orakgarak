package com.ssafy.lab.orak.aidemo.mapper;

import com.ssafy.lab.orak.aidemo.dto.AiDemoApplicationRequestDTO;
import com.ssafy.lab.orak.aidemo.dto.AiDemoApplicationResponseDTO;
import com.ssafy.lab.orak.aidemo.entity.AiDemoApplication;
import com.ssafy.lab.orak.aidemo.enums.ApplicationStatus;
import com.ssafy.lab.orak.recording.dto.RecordResponseDTO;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    comments = "version: 1.6.3, compiler: Eclipse JDT (IDE) 3.43.0.v20250819-1513, environment: Java 21.0.8 (Eclipse Adoptium)"
)
@Component
public class AiDemoApplicationMapperImpl implements AiDemoApplicationMapper {

    @Override
    public AiDemoApplication toEntity(AiDemoApplicationRequestDTO requestDTO, Long userId) {
        if ( requestDTO == null && userId == null ) {
            return null;
        }

        AiDemoApplication.AiDemoApplicationBuilder aiDemoApplication = AiDemoApplication.builder();

        if ( requestDTO != null ) {
            List<Long> list = requestDTO.getRecordIds();
            if ( list != null ) {
                aiDemoApplication.recordIds( new ArrayList<Long>( list ) );
            }
            List<String> list1 = requestDTO.getYoutubeLinks();
            if ( list1 != null ) {
                aiDemoApplication.youtubeLinks( new ArrayList<String>( list1 ) );
            }
        }
        aiDemoApplication.userId( userId );

        return aiDemoApplication.build();
    }

    @Override
    public AiDemoApplicationResponseDTO toResponseDTO(AiDemoApplication application) {
        if ( application == null ) {
            return null;
        }

        AiDemoApplicationResponseDTO.AiDemoApplicationResponseDTOBuilder aiDemoApplicationResponseDTO = AiDemoApplicationResponseDTO.builder();

        aiDemoApplicationResponseDTO.statusDescription( applicationStatusDescription( application ) );
        aiDemoApplicationResponseDTO.adminNote( application.getAdminNote() );
        aiDemoApplicationResponseDTO.createdAt( application.getCreatedAt() );
        aiDemoApplicationResponseDTO.id( application.getId() );
        aiDemoApplicationResponseDTO.processedAt( application.getProcessedAt() );
        List<Long> list = application.getRecordIds();
        if ( list != null ) {
            aiDemoApplicationResponseDTO.recordIds( new ArrayList<Long>( list ) );
        }
        aiDemoApplicationResponseDTO.status( application.getStatus() );
        aiDemoApplicationResponseDTO.updatedAt( application.getUpdatedAt() );
        aiDemoApplicationResponseDTO.userId( application.getUserId() );
        List<String> list1 = application.getYoutubeLinks();
        if ( list1 != null ) {
            aiDemoApplicationResponseDTO.youtubeLinks( new ArrayList<String>( list1 ) );
        }

        return aiDemoApplicationResponseDTO.build();
    }

    @Override
    public AiDemoApplicationResponseDTO toResponseDTO(AiDemoApplication application, List<RecordResponseDTO> recordResponseDTOs) {
        if ( application == null && recordResponseDTOs == null ) {
            return null;
        }

        AiDemoApplicationResponseDTO.AiDemoApplicationResponseDTOBuilder aiDemoApplicationResponseDTO = AiDemoApplicationResponseDTO.builder();

        if ( application != null ) {
            aiDemoApplicationResponseDTO.id( application.getId() );
            aiDemoApplicationResponseDTO.userId( application.getUserId() );
            List<Long> list = application.getRecordIds();
            if ( list != null ) {
                aiDemoApplicationResponseDTO.recordIds( new ArrayList<Long>( list ) );
            }
            List<String> list1 = application.getYoutubeLinks();
            if ( list1 != null ) {
                aiDemoApplicationResponseDTO.youtubeLinks( new ArrayList<String>( list1 ) );
            }
            aiDemoApplicationResponseDTO.status( application.getStatus() );
            aiDemoApplicationResponseDTO.statusDescription( applicationStatusDescription( application ) );
            aiDemoApplicationResponseDTO.adminNote( application.getAdminNote() );
            aiDemoApplicationResponseDTO.createdAt( application.getCreatedAt() );
            aiDemoApplicationResponseDTO.updatedAt( application.getUpdatedAt() );
            aiDemoApplicationResponseDTO.processedAt( application.getProcessedAt() );
        }
        List<RecordResponseDTO> list2 = recordResponseDTOs;
        if ( list2 != null ) {
            aiDemoApplicationResponseDTO.records( new ArrayList<RecordResponseDTO>( list2 ) );
        }

        return aiDemoApplicationResponseDTO.build();
    }

    private String applicationStatusDescription(AiDemoApplication aiDemoApplication) {
        ApplicationStatus status = aiDemoApplication.getStatus();
        if ( status == null ) {
            return null;
        }
        return status.getDescription();
    }
}
