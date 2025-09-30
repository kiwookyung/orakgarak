package com.ssafy.lab.orak.albumtrack.entity;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.processing.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAlbumTrack is a Querydsl query type for AlbumTrack
 */
@Generated("com.querydsl.codegen.DefaultEntitySerializer")
public class QAlbumTrack extends EntityPathBase<AlbumTrack> {

    private static final long serialVersionUID = -510105074L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QAlbumTrack albumTrack = new QAlbumTrack("albumTrack");

    public final com.ssafy.lab.orak.album.entity.QAlbum album;

    public final DateTimePath<java.time.LocalDateTime> createdAt = createDateTime("createdAt", java.time.LocalDateTime.class);

    public final NumberPath<Long> id = createNumber("id", Long.class);

    public final com.ssafy.lab.orak.recording.entity.QRecord record;

    public final NumberPath<Integer> trackOrder = createNumber("trackOrder", Integer.class);

    public QAlbumTrack(String variable) {
        this(AlbumTrack.class, forVariable(variable), INITS);
    }

    public QAlbumTrack(Path<? extends AlbumTrack> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QAlbumTrack(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QAlbumTrack(PathMetadata metadata, PathInits inits) {
        this(AlbumTrack.class, metadata, inits);
    }

    public QAlbumTrack(Class<? extends AlbumTrack> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.album = inits.isInitialized("album") ? new com.ssafy.lab.orak.album.entity.QAlbum(forProperty("album")) : null;
        this.record = inits.isInitialized("record") ? new com.ssafy.lab.orak.recording.entity.QRecord(forProperty("record"), inits.get("record")) : null;
    }

}

