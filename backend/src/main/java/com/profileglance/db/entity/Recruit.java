package com.profileglance.db.entity;

import lombok.*;
import org.checkerframework.checker.units.qual.C;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Recruit {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "recruit_id")
    private Long recruitId;

//    @Column(name = "company_id")
//    private String companyId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "company_id")
    private Company company;

//    @Column(name = "job_id")
//    private Long jobId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "job_id")
    private Job job;

//    @Column(name = "room_id")
//    private Long roomId;

    @OneToOne
    @JoinColumn(name = "session_id")
    private Room room;

    @Column(name = "description_url")
    private String descriptionURL;

    @Column(name = "recruit_url")
    private String recruitURL;

    private String career;

    @Column(name = "job_detail")
    private String jobDetail;

    @Column(name = "recruit_start_date")
    private String recruitStartDate;

    @Column(name = "recruit_end_date")
    private String recruitEndDate;

    @Column(name = "presentation_date")
    private String presentationDate;
}
